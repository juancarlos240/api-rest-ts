import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getCars,insertCar ,getCar } from "../services/items"

 const getItems = async (req:Request, res:Response)=>{
    try {
        const responseItems =await getCars()
        res.send(responseItems)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }

}

const getItem =async (req:Request, res:Response)=>{
    try {
        const {id} =req.params
        const responseItem =await getCar(id)
        res.send(responseItem)
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }

}


const updateItem = (req:Request, res:Response)=>{
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEMS', e)
    }
}

const postItem = async ({ body }:Request, res:Response)=> {
    try {
        const responseItem =await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEMS', e)
    }


}

const deleteItem = (req:Request, res:Response)=>{
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEMS', e)
    }
}


export {getItems,getItem,postItem,updateItem, deleteItem}