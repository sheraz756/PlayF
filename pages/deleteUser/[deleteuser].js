import React, { useState, useEffect } from 'react';
import styles from './login.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ErrorComponent from '../../components/common/ErrorComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import cookie from 'js-cookie';
import { loginUser } from '../../utils/authUser';
import Loading from '../../components/loading-spinner/Loading';
import Image from 'next/image';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios'
const deleteUser = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const { username, password } = user;
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [submitDisable, setSubmitDisable] = useState(true);

  
    const router = useRouter();
    const { deleteuser } = router.query;
    
        const handleDelete = () => {
      
          axios.delete(`${baseUrl}/users/deleteSelf/${deleteuser}`)
            .then(response => {
              console.log(response.data);
              // Perform any additional actions after successful deletion
            })
            .catch(error => {
              console.error(error);
              // Handle any error that occurs during deletion
            });
        };

    return (
        <>

            <div className={styles.modal}>

                <div className={styles.logo}>
                    <Link href='/'>
                        <img src="/logotrans.png" alt='playeon' />
                    </Link>
                </div>
                <div className={styles.modal__box}>
                    <div className={styles.modal__header}>
                        <h3>Delete My Account</h3>

                    </div>
                    <div className={styles.modal__body}>
                        {errorMsg && <ErrorComponent errorMsg={errorMsg} />}
                        {formLoading && <Loading />}
                       
                            <div className={styles.form__control}>
                                <input
                                   
                                    type="text"
                                    id="text"
                                   
                                  
                                    />

                            </div>
                            <div className={styles.form__control}>
                                <input
                                   
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                              
                                    placeholder='Password' />
                                <div className={styles.customDivIcon}>
                                    {password.length > 0 &&
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEye : faEyeSlash}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowPassword(!showPassword)} />
                                    }
                                </div>
                                <div className={styles.form__controls_div}>
                                    <div className={styles.form__controls}>
                                    
                                    </div>
                                    <div className={styles.form__controls}>
                                   
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleDelete}
                                className={styles.btn}>
                                Delete
                            </button>
                      
                    </div>
                    <div className={styles.modal__footer}>
                        {/* <p>Account Logged In? <Link href='/logout'><a>Logout here</a></Link></p> */}
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default deleteUser