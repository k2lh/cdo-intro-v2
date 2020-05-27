export default [
  {
    id: 'discover',
    label: 'Discover',
    url: '/infodpe',
    limit: 'none',
    subList: [
      {
        label: 'for DPEs',
        url: '/infodpe',
        limit: 'none'
      },
      {
        label: 'for PEs/Sales',
        url: '/infope',
        limit: 'none'
      }
    ]
  },
  {
    id: 'explore',
    label: 'Solutions',
    url: '/clarify',
    limit: 'none',
    subList: [
      {
        label: 'Clarify',
        url: '/clarify',
        limit: 'none'
      },
      {
        label: 'Evaluate',
        url: '/evaluate',
        limit: 'none'
      },
      {
        label: 'Visualize',
        url: '/visualize',
        limit: 'none'
      }
    ]
  },
  {
    id: 'projects',
    label: 'Projects',
    url: '/projects/core',
    limit: 'none',
    subList: [
      {
        label: 'Co-creation',
        url: '/projects/core',
        limit: 'none'
      },
      {
        label: 'Active',
        url: '/projects/active',
        limit: 'none'
      },
      {
        label: 'Inactive',
        url: '/projects/inactive',
        limit: 'none'
      },
      {
        label: 'Activities',
        url: '/activity',
        limit: 'none'
      },
      {
        label: 'Engagements',
        url: '/engagements',
        limit: 'admins'
      }
    ]
  },
  {
    id: 'patterns',
    label: 'Patterns',
    url: '/patterns',
    limit: 'none'
  },
  {
    id: 'library',
    label: 'Library',
    url: '/education',
    limit: 'none',
    subList: [
      {
        label: 'Education',
        url: '/education',
        limit: 'none'
      },
      {
        label: 'Videos',
        url: '/videos',
        limit: 'none'
      },
      {
        label: 'Articles',
        url: '/articles',
        limit: 'none'
      }
    ]
  }
]
