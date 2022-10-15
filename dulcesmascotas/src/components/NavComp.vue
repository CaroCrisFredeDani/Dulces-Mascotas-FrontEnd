<template>
 <CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">
      
      <img alt="mascotas logo" src="../assets/logo.jpg" />
    </CNavbarBrand>
    <CNavbarToggler @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="/" active>
            inicio
          </CNavLink>
        </CNavItem>

        <CDropdown variant="nav-item" :popper="false">
          <CDropdownToggle color="secondary">Mascotas</CDropdownToggle>

          <CDropdownMenu>
            <CDropdownItem href="/perros">Perros</CDropdownItem>
            <CDropdownItem href="/gatos">Gatos</CDropdownItem>
    
          </CDropdownMenu>

        </CDropdown>

    

        <CNavItem>
          <CNavLink href="/about" active>
            Sobre Nosotros
          </CNavLink>
        </CNavItem>

      </CNavbarNav>
      <CForm class="d-flex">
        
          <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
     
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
</template>

<script>

</script>

<style scoped>
img {
  max-width: 130px;
  max-height: 130px;
}

.d-flex{
  margin-left: 10%;
}


</style>

