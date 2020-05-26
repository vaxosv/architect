export enum MenuColors {
    darck = 'header header-darck',
    white = 'header'
}


export enum Logo {
    white,
    darck
}

export interface MenuConfig {
    menuColors: MenuColors;
    logo: Logo;
    shwFiltr: boolean;
    transparent?: boolean
}
