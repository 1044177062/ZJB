<template>
    <div>
        <div v-for="(i,index) in log" :key="index">{{i.msg}}</div>
    </div>
</template>

<script>
import {encode,decode} from '../api/code'
export default {
    data () {
        return {
            getPlaceRevenue:'',
            log:[]
        }
    },
    mounted(){
        let that=this
        const ws = new WebSocket('wss://broadcastlv.chat.bilibili.com:2245/sub');
        ws.onopen = function () {
        ws.send(encode(JSON.stringify({
            roomid: 23058
        }), 7));
        //6136246
        setInterval(function () {
            ws.send(encode('', 2));
        }, 30000);
        };

        ws.onmessage = async function (msgEvent) {
        const packet = await decode(msgEvent.data);
        switch (packet.op) {
            case 8:
                that.log.push({msg:'---连接弹幕接口成功---'})
                console.log(that.log)
            break;
            case 3:
            const count = packet.body.count
            break;
            case 5:
            packet.body.forEach((body)=>{ 
                switch (body.cmd) {
                case 'NOTICE_MSG':
                    let newbody=body.msg_common
                    if(body.msg_common.indexOf('恭喜主播')){
                        return;
                    }
                     newbody=newbody.slice(newbody.indexOf('个')-1,newbody.indexOf('，'))
                     that.log.push({msg:newbody+'冲冲冲'})
                     return;
                default:
                   console.log(body)
                }
            })
            break;
            default:
            console.log(packet);
        }
        };
    }
}
</script>
