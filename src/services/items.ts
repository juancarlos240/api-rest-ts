import { Car } from "../interfaces/car.interface"
import { ItemModel } from "../models/item"

const insertCar = async (item:Car) => { 
    const responseInsert = await ItemModel.create(item)
    return responseInsert
 }

 const getCars = async ()=>{
    const responseGetAll = await ItemModel.find({})
    return responseGetAll
 }

 const getCar = async (id:string)=>{
    const responseGet = await ItemModel.findOne({_id: id})
    return responseGet
 }

export{ insertCar, getCars ,getCar}