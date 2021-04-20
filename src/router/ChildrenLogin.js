import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'

const childLogin = [
   {
      path: '',
      name: 'Page1',
      component: Page1,
    },{
      path: '1',
      name: 'Page11',
      component: Page1,
    },
    {
      path: '2',
      name: 'Page2',
      component: Page2,
    }
    ,
    {
      path: '3',
      name: 'Page3',
      component: Page3,
    } ,
    {
      path: '4',
      name: 'Page4',
      component: Page4,
    }
];
export default childLogin;