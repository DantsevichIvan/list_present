import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {itemjoson} from "./items";
import {instance } from './App'

let ax  = instance.create({
    baseURL: 'http://185.221.153.107:8088/api'
})
const mock = new MockAdapter(ax);

export const getItems = () => {
    debugger
    mock.onGet('/items')
        .reply(200, itemjoson)
};

getItems();
mock.onAny().passThrough();