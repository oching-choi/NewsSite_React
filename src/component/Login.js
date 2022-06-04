import {useEffect,useState} from 'react';

function Login(props){ 
    //id, pw value
    let [idValue, setIdValue] = useState('');
    let [pwValue, setPwValue] = useState('');
    //submit 버튼 활성화/비활성화
    let [submit, setSubmit] = useState('');
    //id, pw 유효성 에러메시지
    const [idConfirm, setIdConfirm] = useState(false);
    const [pwConfirm, setPwConfirm] = useState(false);

    return(
     <div className='signIn-wrapper'>
       <h1 className='logo'>NewsSite</h1>
       <form className='signIn-form'>
           <input type='text' className='id-input' placeholder='email' value={idValue} onChange={(e)=>{
               idValidateCheck(e)
           }}></input>
           {
              !idConfirm || <div className="id-confirm">💡영문대소문자, 숫자, 주소 포함</div>
           }
          <input type='password' className='password-input' placeholder='password' value={pwValue} onChange={(e)=>{
              pwValidateCheck(e)
          }} ></input>
           {
              !pwConfirm || <div className="id-confirm">💡최소 4자 이상의 숫자</div>
           }
          <input type='submit' className='submit-btn' value='로그인' disabled={submit} onClick={(e)=>{loginFuc(e)}}></input>
       </form>
     </div> 
    )

    // 로그인처리
    function loginFuc(e){
        e.preventDefault();
        if(!idValue && !pwValue){
            alert('id와 pw 모두 작성해주세요.')
        }else{
            alert('로그인 성공')
            props.setLogin(true);
        }
    }

    //id 유효성검사
    function idValidateCheck(e){
        const regExpId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        setIdValue(e.target.value.trim());

        if( idValue.match(regExpId) ){
            setIdConfirm(false) //정규식 통과 - 에러메세지 false
            setSubmit('');
        }else{
            setIdConfirm(true) //정규식 미통과 - 에러메세지  true
            setSubmit('disabled');
        }
    }
    //pw 유효성검사
    function pwValidateCheck(e){
        const regExPw = /^[0-9]{4,}$/;

        setPwValue(e.target.value.trim());
      
        if( pwValue.match(regExPw) ){
            setPwConfirm(false) //정규식 통과 - 에러메세지 false
            setSubmit('');
        }else{
            setPwConfirm(true) //정규식 미통과 - 에러메세지  true
            setSubmit('disabled');
        }
    }
  
}

  export default Login