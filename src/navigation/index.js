const one = () => ({
  stack: {
    id: 'tab.One',
    children: [
      {
        component: {
          id: 'screen.One',
          name: 'screen.One',
          options: {
            bottomTab: {
              text: 'One',
            },
          },
        },
      }
    ],
  },
})

const two = () => ({
  stack: {
    id: 'tab.Two',
    children: [
      {
        component: {
          id: 'screen.Two',
          name: 'screen.Two',
          options: {
            bottomTab: {
              text: 'Two',
            },
          },
        },
      }
    ],
  },
})

const main = () => ({
  root: {
    sideMenu: {
      left: {
        component: {
          id: 'navigation.SideMenuScreen',
          name: 'screen.SideMenuScreen',
        },
      },
      center: {
        bottomTabs: {
          id: 'BottomTabs',
          children: [
            one(),
            two(),
          ],
        },
      },
    },
  },
})

export default {
  main,
}
