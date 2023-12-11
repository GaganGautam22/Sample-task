export default {
    data: () => ({
        isMobile: false,
        isTab: false,
        isLaptop: false,
    }),
    mounted() {
        this.isMobile = window.innerWidth < 567;
        this.isTab = window.innerWidth < 768;
        this.isLaptop = window.innerWidth < 1264;
    },
}