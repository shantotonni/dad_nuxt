import Vue from 'vue'
import Submit from '~/components/buttons/Submit'
import SkeletonLoader from '~/components/loaders/Skeleton'
import Breadcrumb from '~/components/common/Breadcrumb'
import AdvancedDatatable from '~/components/datatable/Advanced'
const components = { Submit, SkeletonLoader, Breadcrumb }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
