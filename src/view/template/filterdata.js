const year = ['2015','2016','2017','2018','2019'];
const mounth = ['1','2','3','4','5','6','7','8','9','10','11','12'];
const date = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

export const config_1 = {
    trigger: '#select1',
    title: '选择时间',
    wheels: [
        {data: year},
        {data: mounth},
        {data: date}
    ],
    position:[0, 0, 0]
};

export const config_2 = {
    trigger: '#select2',
    title: '选择时间',
    wheels: [
        {data: year},
        {data: mounth},
        {data: date}
    ],
    position:[0, 0, 0]
};

