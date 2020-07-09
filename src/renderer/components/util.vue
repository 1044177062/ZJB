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
                that.log.push({msg:'加入房间'})
                console.log(that.log)
            break;
            case 3:
            const count = packet.body.count
                that.log.push({msg:`人气：${count}`})
            break;
            case 5:
            packet.body.forEach((body)=>{
                switch (body.cmd) {
                case 'DANMU_MSG':
                    that.log.push({msg:`${body.info[2][1]}: ${body.info[1]}`})
                    break;
                case 'SEND_GIFT':
                    that.log.push({msg:`${body.data.uname} ${body.data.action} ${body.data.num} 个 ${body.data.giftName}`})
                    break;
                case 'WELCOME':
                     that.log.push({msg:`欢迎 ${body.data.uname}`})
                    break;
                // 此处省略很多其他通知类型
                default:
                    console.log(body);
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
