export default {
  id: 'io.slowroads.app',
  title: 'Slow Roads',
  singleton: true,
  icon: 'ph:sphere-duotone',
  windows: {
    main: {
      component: () => import('./components/Window/WindowSlowroads.vue'),
      resizable: true,
      maximizable: true,
      size: {
        width: 600,
        height: 400,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    slowroads: {
      command: 'slowroads',
    },
  },
  commands: {
    slowroads: (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
