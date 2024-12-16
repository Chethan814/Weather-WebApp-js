import "../style.css";
import "./dom"
import { ProcessData } from "./utils";
import { fatchApi } from "./api";

const main = async () => {
    try{
        const data = await fatchApi();
        if (data) {
            const processedData = ProcessData(data)
            // console.log(processedData);
        }
    }
    catch(error){
        console.log(error);
    }
}

main()