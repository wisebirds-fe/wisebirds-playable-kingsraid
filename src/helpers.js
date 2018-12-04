export const getAssetData = (asset) => `url("${asset.data}")`

export function getScrollOffsetX () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
}

export function getScrollOffsetY () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * 팝업 레이어가 뜰 때 backface-visibility 적용
 */
export function freezeBody () {
  const windowScrollLeft = getScrollOffsetX()
  const windowScrollTop = getScrollOffsetY()
  document.body.style.marginLeft = `${-windowScrollLeft}px`
  document.body.style.marginTop = `${-windowScrollTop}px`
  if (document.body.classList) {
    document.body.classList.add('__ui-frozen-body__')
  } else {
    document.body.className += '__ui-frozen-body__'
  }
}

/**
 * backface-visibility 적용된 레이어에 대해 해제 (beforeDestroy시 사용)
 */
export function unfreezeBody () {
  const windowScrollLeft = Math.abs(parseInt(document.body.style.marginLeft, 10))
  const windowScrollTop = Math.abs(parseInt(document.body.style.marginTop, 10))
  document.body.style.marginLeft = ''
  document.body.style.marginTop = ''
  if (document.body.classList) {
    document.body.classList.remove('__ui-frozen-body__')
  } else {
    document.body.className -= '__ui-frozen-body__'
  }
  window.scrollTo(windowScrollLeft, windowScrollTop)
}
