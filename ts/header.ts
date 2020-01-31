export class Header {
    constructor() {
        this.run()
    }

    run(){
        document.getElementById('menu').addEventListener('click', () => {
            document.getElementById('header').classList.toggle('mobile_active')
            document.getElementById('headerContainer').classList.toggle('header-dark')

        })
    };
}
