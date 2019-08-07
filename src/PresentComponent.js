import React from 'react';
import style from './App.module.css'
import {connect} from "react-redux";
import {ChangPictureAC} from "./Action_Present";


const PresentComponent = (props) => {
    console.log(props.inits)
    let data_start = props.present.start.slice(0, 10);
    let data_end = props.present.end.slice(0, 10);



    return (
        <div className={style.component}>
            <div className={style.img}>
                <img src="https://cdn.dribbble.com/users/215/screenshots/287929/large_present.png" alt=""/>
            </div>
            <div className={style.information}>
                <span className={style.bold_name}>{props.present.name}</span>
                <div className={style.time}>
                    <div className={style.time_start}>
                        <span className={style.color_text_start_end}>{data_start}</span>
                        <span className={style.bold_text}>START</span>
                    </div>
                    <div className={style.time_end}>
                        <span className={style.color_text_start_end}>{data_end.slice(0, 10)}</span>
                        <span className={style.bold_text}>END</span>
                    </div>
                </div>
                <div className={style.text}>
                    <span>{props.present.description}</span>
                </div>

                <div className={style.item_chancetotal}>
                    <div className={style.item}>
                        <span className={style.color_item_chanc}>{props.present.items.length}</span>
                        <span className={style.bold_text}>ITEM</span>
                    </div>
                    <div className={style.chancetotal}>
                        <span className={style.color_item_chanc}>{props.present.probability_total}</span>
                        <span className={style.bold_text}>CHANCETOTAL</span>
                    </div>
                </div>
                <button className={style.btn} onClick={() => props.change_picture(props.present.items)}>Explain</button>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    inits: state.present.inits
});


const mapDispatchToProps = (dispatch) => ({
    change_picture: (el) => {
        dispatch(ChangPictureAC(el))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PresentComponent);