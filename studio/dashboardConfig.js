export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd7a59e1d998201366412d8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yruj3wss',
                  apiId: '0345da73-78e5-42a3-a785-3379d296831d'
                },
                {
                  buildHookId: '5fd7a59e03e05500af4b60a2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fgarupzv',
                  apiId: '586c89cd-d299-497d-ad7a-054c413258d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/didurefresh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fgarupzv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
