import React,{ useCallback } from 'react';
import {debounce} from 'lodash';
import { useDispatch } from 'react-redux';

import { clearData, fetchData, setLoading } from "../../action/action";

import './Input.css'; 

const Input = ()=>{
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFunc = useCallback(debounce((value,isFetching) => isFetching ? dispatch(fetchData(value)) : dispatch(clearData()), 1000),[]);

    const onChangeValue = (e) =>{
        let value = e.target.value.trim();
        if(value.length >= 3){
            dispatch(setLoading(true));
            debounceFunc(value,true);
        }
        else{
            debounceFunc(value,false);
        }
    }

    return <div className='search-wrapper'>
         <span>User Name</span>
        <input onChange={onChangeValue} className='search' placeholder='Type more than 3 letters will trigger searching'/>
        </div>
}

export default Input;
