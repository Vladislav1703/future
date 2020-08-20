/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
export default {
  PUSH_ROW_IN_STATE: (state, row) => {
    let newPhone = 0
    const newRow = row
    newRow.description = ''
    newRow.address = {}
    newRow.address.streetAddress = ''
    newRow.address.city = ''
    newRow.address.state = ''
    newRow.address.zip = ''
    newPhone = `(${newRow.phone.slice(0, 3)})${newRow.phone.slice(3, 6)}-${newRow.phone.slice(6)}`
    newRow.phone = newPhone
    state.general_list.unshift(newRow)
    state.regular_list = state.general_list.slice(0, 50)
  },
  SET_LIST_TO_STATE: (state, list) => {
    state.general_list = list
    state.regular_list = state.general_list.slice(0, 50)
    state.sorting_list = false
  },
  SORT_LIST_IN_STATE: (state, payload) => {
    if (state.sorting_list === false) {
      if (payload.sortArg > 0) {
        // eslint-disable-next-line no-nested-ternary
        state.general_list.sort((a, b) => (a[payload.key] > b[payload.key] ? 1 : b[payload.key] > a[payload.key] ? -1 : 0))
      } else {
        // eslint-disable-next-line no-nested-ternary
        state.general_list.sort((a, b) => (a[payload.key] > b[payload.key] ? -1 : b[payload.key] > a[payload.key] ? 1 : 0))
      }
      state.regular_list = state.general_list.slice(0, 50)
    }
    if (state.sorting_list === true) {
      if (payload.sortArg > 0) {
        // eslint-disable-next-line no-nested-ternary
        state.regular_list.sort((a, b) => (a[payload.key] > b[payload.key] ? 1 : b[payload.key] > a[payload.key] ? -1 : 0))
      } else {
        // eslint-disable-next-line no-nested-ternary
        state.regular_list.sort((a, b) => (a[payload.key] > b[payload.key] ? -1 : b[payload.key] > a[payload.key] ? 1 : 0))
      }
    }
  },
  SET_FILTER_IN_STATE: (state, filterkey) => {
    state.regular_list = state.general_list.filter((item) => item.id.toString().indexOf(filterkey) > -1 || item.firstName.indexOf(filterkey) > -1 || item.lastName.indexOf(filterkey) > -1 || item.email.indexOf(filterkey) > -1 || item.phone.toString().indexOf(filterkey) > -1)
    state.sorting_list = true
  },
  SET_PAGE_IN_STATE: (state, pages) => {
    state.regular_list = state.general_list.slice(pages.startRow, pages.endRow)
  }
}
