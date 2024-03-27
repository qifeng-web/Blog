/*
 * @Author: gaofan05
 * @Date: 2024-03-27 14:35:36
 * @LastEditors: gaofan05
 * @Description: 首页
 */

import { Button, Input } from 'antd';
import React from 'react';

const Home = () => {
    return (
        <>
            <div>刘世杰</div>
            <img src='https://static.yximgs.com/udata/pkg/KS-IS-AVATAR-PRODUCTION/73311/1CC605519BEFC664E21A808C06F5DFF9_compressed_100'/>
            <div>男 电商营销组王嘉尔</div>
            <Button style={{marginRight: 8}}>离职</Button>
            <Button type="primary"> 开除</Button><br></br>
            <Input placeholder='理由' style={{ width: '20%' }}/>
        </>
    );
};

export default Home;
