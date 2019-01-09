const main = () => ({
  root: {
    stack: {
      children: [
        {
          component: {
            id: 'screen.Main',
            name: 'screen.Main',
          },
        }
      ],
    },
  },
})

const modalOne = () => ({
  stack: {
    children: [
      {
        component: {
          id: 'screen.ModalOne',
          name: 'screen.ModalOne',
        },
      }
    ],
  },
})

const modalTwo = () => ({
  stack: {
    children: [
      {
        component: {
          id: 'screen.ModalTwo',
          name: 'screen.ModalTwo',
        },
      }
    ],
  },
})

export default {
  main,
  modalOne,
  modalTwo,
}
