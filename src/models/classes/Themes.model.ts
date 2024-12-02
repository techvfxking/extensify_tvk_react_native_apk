export class ThemesModel {
    public headingColor!: string;
    public buitonColor!: string;
}

export class ExpenseSpecificTheme{
    [key: string]: string;
    public food!: string;
    public commute!: string;
    public shopping!: string;
    public entertainment!: string;
    public other!: string;
}