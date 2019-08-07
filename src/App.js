import React, {useEffect} from 'react';
import axios from 'axios';
import './App.module.css';
import {getItems} from "./items";
import {ItemsPutThunk} from "./Action_Present";
import {connect} from "react-redux";
import PresentComponent from "./PresentComponent";
import style from './App.module.css'

export const instance = axios.create({
    baseURL: 'http://185.221.153.107:8088/api'
});


function App(props) {

    const {init, present, inits} = props;
    console.log(inits)
    useEffect(() => {
        async function fetchData() {
            const response = await getItems();
            // thunk and put response
            init(response)
        }

        fetchData()
    }, []);

    if (present === undefined) {
        return (
            <div>
            </div>
        )
    }


    return (
        <div className={style.App}>
            {
                present.map((el) => {
                    return (
                        <div>
                            <PresentComponent present={el} inits={inits}/>
                        </div>
                    )
                })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    present: state.present.present,
    inits: state.present.inits
});


const mapDispatchToProps = (dispatch) => ({
    init: (response) => {
        dispatch(ItemsPutThunk(response))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
