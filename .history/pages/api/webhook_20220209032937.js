import {buffer} from "micro"
import * as admin from "firebase"

const serviceAccount = require("../../permission.json")

const app = !admin.apps.length

export default async(req,res) =>{
    if(req.method === "POST"){

    }
}