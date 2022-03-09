export let wordle = '';
export const getWordle = () => {
    fetch('http://localhost:8000/words')
        .then(response => response.json())
        .then((json) => {
        wordle = json.toUpperCase();
    })
        .catch(error => console.log(error));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V29yZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFdvcmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxHQUFTLEVBQUU7SUFDbEMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1NBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IHdvcmRsZSA9ICcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdvcmRsZSA9ICgpOiB2b2lkID0+IHtcclxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3dvcmRzJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChqc29uOiBzdHJpbmcpID0+IHtcclxuICAgICAgd29yZGxlID0ganNvbi50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59OyJdfQ==