import React from 'react'

import links from './content'
import * as S from './styled'

const MenuLinks = () =>(
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((links,i) => (
        <S.MenuLinksItem key={'i'}>
          <S.MenuLinksLink to={links.url} activeClassName='active'>{links.label}</S.MenuLinksLink>
        </S.MenuLinksItem> 
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>

)

export default MenuLinks