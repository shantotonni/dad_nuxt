import moment from 'moment'
const { format } = require('number-currency-format')
export const Helper = {
  data: () => ({
    data: ''
  }),
  methods: {
    config () {
      const token = this.$auth.strategy.token.get()
      return {
        headers: { Authorization: token }
      }
    },
    axiosPostWithoutToken (route, data, success, error) {
      this.$axios.$post(route, data)
        .then(response => success(response))
        .catch(err => error(err))
    },
    axiosPost (route, data, success, error) {
      this.$axios.$post(route, data, this.config())
        .then(response => success(response))
        .catch((err) => {
          if (err.response.status === 401) {
            this.$auth.logout()
            this.redirect('/auth/login')
          } else {
            error(err)
          }
        })
    },
    axiosGet (route, success, error) {
      this.$axios.$get(route, this.config())
        .then(response => success(response))
        .catch((err) => {
          if (err.response.status === 401) {
            this.$auth.logout()
            this.redirect('/auth/login')
          } else {
            error(err)
          }
        })
    },
    axiosPut (route, data, success, error) {
      this.$axios.$put(route, data, this.config())
        .then(response => success(response))
        .catch((err) => {
          if (err.response.status === 401) {
            this.$auth.logout()
            this.redirect('/auth/login')
          } else {
            error(err)
          }
        })
    },
    axiosDelete (route, success, error) {
      this.$axios.$delete(route, this.config())
        .then(response => success(response))
        .catch((err) => {
          if (err.response.status === 401) {
            this.$auth.logout()
            this.redirect('/auth/login')
          } else {
            error(err)
          }
        })
    },
    redirect (route) {
      window.location.href = route
    },
    successNotification (msg) {
      this.$toaster.success(msg)
    },
    errorNotification (msg) {
      if (msg.response === undefined) {
        this.$toaster.error(msg)
      } else if (msg.response.data.message === undefined) {
        this.$toaster.error(msg)
      } else {
        this.$toaster.error(msg.response.data.message)
      }
    },
    numberFormat (value) {
      if (value == null) {
        return ''
      } else {
        return format(value, {
          currency: 'BDT. ',
          spacing: false,
          currencyPosition: 'LEFT'
        })
      }
    },
    weightFormat (value) {
      return format(value, {
        currency: ' Kg.',
        spacing: false,
        currencyPosition: 'right'
      })
    },
    dateFormat (date) {
      return date ? moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY') : ''
    },
    dateTimeFormat (date) {
      return date ? moment(date, 'YYYY-MM-DD h:mm:ss').format('DD-MM-YYYY h:mm a') : ''
    },
    periodFormat (data) {
      return data ? moment(data).format('MM-YYYY') : ''
    }
  }
}
