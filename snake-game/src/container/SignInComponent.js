import React from 'react';

export const SignInComponent = () => {

    return(
        <div className='sign-cont'>
            <div className='sign-comp' id='signi-sec'>
                <form className='forms-comp' onSubmit={(e) => {handleStudentSignIn(e)}}>
                    <div>
                        <label>Username</label><br></br>
                        <input className='form-inputs' type="text" name="username"/>  <br></br>  
                    </div>
                    <div>
                        <label>PassWord</label><br></br>
                        <input className='form-inputs' type="password" name="password"/><br></br>
                    </div>
                    <button className='form-buttons' type='submit' value='submit' variant="contained" color="primary" disableElevation>
                            Submit
                    </button>
                </form>
            </div>
            <div className='sign-comp' id='signu-sec'>
                <form className='forms-comp' onSubmit={(e) => {handleStudentSignIn(e)}}>
                    <div>
                        <label>Username</label><br></br>
                        <input className='form-inputs' type="text" name="username"/>  <br></br>  
                    </div>
                    <div>
                        <label>PassWord</label><br></br>
                        <input className='form-inputs' type="password" name="password"/><br></br>
                    </div>
                    <button className='form-buttons' type='submit' value='submit' variant="contained" color="primary" disableElevation>
                            Submit
                    </button>
                </form>
            </div>
        </div>
    )
}