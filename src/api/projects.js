import {Client} from '@notionhq/client';

const KEY = "secret_Taqz20gz1YcIrhWpO6dywTEGMIaHTAHeIr17jxSbEy2";
const dbId = "4266832641504bb890f7b9e08569c0b5"

const ntn = new Client({
        auth: KEY,
        notionVersion: "2022-02-22",
    });

export const fetch = async () => {
    console.log(KEY)
    console.log(ntn.databases)
    try{    
        const res = await ntn.databases.retrieve({
            database_id: dbId
        })
        return res;
    }catch(err) {
        console.log(err)
    }
}
