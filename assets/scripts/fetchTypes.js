
// ======================================
export const ADD_PHONE = "ADD_PHONE";

/*
request:
    body:{
        type: ""
        phone:"<num>"
    },

response:
    body:{
        phone:"<num>",
        qrNum:"<num> def 0"
    }
 */

 //=======================================
 // ======================================
export const SEND_QR = "SEND_QR";

/*
request:
    body:{
        type: "type"
        phone:"<num>"
        data:"<obg>"
    },

response:
    body:{
        qrNum:"<num> def 0"
        error:
    }
 */

 //=======================================
