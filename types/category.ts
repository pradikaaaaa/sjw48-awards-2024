import { Nominasi } from "./nominasi";

export type Category = {
    id : number;
    nama : string;
    tipe : string;
    nominasi : Nominasi[]
}