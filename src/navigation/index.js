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

const three = () => ({
  stack: {
    id: 'tab.Three',
    children: [
      {
        component: {
          id: 'screen.Three',
          name: 'screen.Three',
          options: {
            bottomTab: {
              text: 'Three',
            },
          },
        },
      }
    ],
  },
})

const four = () => ({
  stack: {
    id: 'tab.Four',
    children: [
      {
        component: {
          id: 'screen.Four',
          name: 'screen.Four',
          options: {
            bottomTab: {
              text: 'Four',
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
          id: 'navigation.SideMenu',
          name: 'screen.SideMenu',
        },
      },
      center: {
        bottomTabs: {
          id: 'BottomTabs',
          children: [
            one(),
            two(),
            three(),
            four(),
          ],
        },
      },
    },
  },
})

export default {
  main,
}
