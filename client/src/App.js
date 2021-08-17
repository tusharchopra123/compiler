import logo from './logo.svg';
import './App.css'
import AceEditor from 'react-ace'
import axios from 'axios'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/mode-java'
import 'ace-builds/src-min-noconflict/mode-c_cpp'
import 'ace-builds/src-min-noconflict/mode-python'
import 'ace-builds/src-min-noconflict/mode-text'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react';
import {baseUrl} from './baseURL'
function App() { 
  const [language, setLanguage] = useState('c_cpp');
  const [compilerWidth, setCompilerWidth] = useState('60%')
  const [outputWidth, setOutputWidth] = useState('40%')

  const [code, setCode] = useState(`#include <iostream>
using namespace std;
int main() {
    cout<<"Hello World!";
    return 0;
} 
`)
  const [output,setOutput]=useState('')
  const [input,setInput]=useState('');
  useEffect(() => {
   if(language==="c_cpp")setCode(`#include <iostream>
using namespace std;
int main() {
  cout<<"Hello World!";
  return 0;
} 
   `)
   else{
    setCode(`print("Hello World!")`)
   }
  }, [language])
  const runButton =async (e)=>{
    console.log(input)
    var format;
    if(language==='c_cpp'){
      format = 'cpp';
    }else{
      format = 'py'
    }
    var payload = {
      language: format,
      code: code,
      input:input
    }
    const {data} = await axios({
      url: `/api/compiler/run`,
      method: 'POST',
      data:payload,
      })
      console.log(data)
          // console.log(response.status)
      let intervalId;
      intervalId = setInterval(async()=>{
        const {data:dataRes} = await axios.get(`/api/compiler/status`,{ params: { id: data.jobId } })
        const {success,job,error} = dataRes;
        console.log(error)
        console.log(success)
        if(success){
          const {status: jobStatus, output: jobOutput } = job;
          if(jobStatus==="pending")return;
          console.log(jobStatus)
          var outp;
          if(jobStatus==="error"){
            var temp = JSON.parse(jobOutput);
            console.log(temp);
            if(language==="c_cpp"){
            var rmvstring = temp.error.cmd.split(' ')[1]+':';
            // console.log(rmvstring)
            // console.log(rmvstring.split(' '))
            outp = temp.stderr.replaceAll(rmvstring,"");
            }else{
            var rmvstring = 'File "'+temp.error.cmd.split(' ')[1]+'",';
            console.log(rmvstring)
            console.log(rmvstring.split(' '))
            outp = temp.stderr.replaceAll(rmvstring,"");
            }
            outp = outp.replace(/\s+/g,' ').trim();
            console.log(outp)
          }else{
            outp = jobOutput;
          }
          setOutput(outp);
          clearInterval(intervalId)
        }else{
            console.log(error);
            var out = error;
            console.log(out)
            setOutput(out)
            clearInterval(intervalId)

        }
        console.log(dataRes)
      },1000)    
  }
  return (
    <div className="App">
      <div className="headingMain ace-monokai">ONLINE IDE</div> 
      <div className="ace-monokai sectionAbove">
          <div className="innerSection1">          
          <button onClick={runButton} className="buttonRun"> <FontAwesomeIcon icon={faPlay} color="white"/> <span>Run</span></button>
          <select
            className="select ace-monokai"
            value={language}
            onChange={(e)=>{setLanguage(e.target.value)}} 
          >
            <option value="c_cpp">C++</option>
            <option value="python">Python</option>
          </select>
          <button className="ace-monokai buttonInput" onClick={(e)=>{
            if(outputWidth==="40%"){
            setCompilerWidth("100%");
            setOutputWidth("0%");
            }else{
              setCompilerWidth("60%");
            setOutputWidth("40%");
            }
          }}><span>INPUT</span><FontAwesomeIcon icon={faKeyboard} color="white"/> </button>
          </div>
          <div>

          </div>
          <div>
            Made by Tushar Chopra
          </div>
      </div>
      <div className="main">
      <AceEditor
            className="editor"
            style={{
                height: '100vh',
                width: `${compilerWidth}`,
            }}
            placeholder='Start Coding'
            mode={language}
            theme='monokai'
            name='basic-code-editor'
            onChange={currentCode => setCode(currentCode)}
            fontSize={18}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
        />
        <div className="display ace-monokai" style={{width:`${outputWidth}`,height:'100vh'}}>
        <div style={{height:'50vh'}}>
        <div className="ace-monokai headingDisplay">Input</div>
        <textarea className="ace-monokai output" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        </div>
        <div className="dispalyInner"style={{height:'50vh'}}>
        <div className="headingDisplay ace-monokai">Output</div>
        <textarea className="ace-monokai output" value={output} readOnly></textarea>
        </div>
        </div>
        </div>
    </div>
  );
}

export default App;
