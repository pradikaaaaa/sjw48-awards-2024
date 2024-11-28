import { Nominasi } from "./nominasi";

export type Category = {
    id : number;
    nama : string;
    nominasi : Nominasi[]
}