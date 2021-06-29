import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <CloseIcon color="#fff" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="var(--text)" size="20px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  outline:0;
  transition: all 0.3s ease;
  &:focus {
    outline:0;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);