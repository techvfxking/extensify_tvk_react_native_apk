import { ReactCompBasicProp } from "../types/CustomTypes.model";

export interface IGlobalHeader extends ReactCompBasicProp{
    headerName: string;
    textCenter?: boolean;
    customTextStyle?:string;
}