<template>
    <div id="capcalera">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/image/logo.png" alt="Bootstrap" width="60" height="60">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">Àger Gestió</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <router-link to="/">Inici</router-link>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Serveis
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item">
                                        <router-link to="/contables">Tràmits Contables</router-link>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item">
                                        <router-link to="/laboral">Tràmits Laborals</router-link>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item">
                                        <router-link to="/crea">Crea una empresa amb nosaltres</router-link>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#equip">Equip</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <router-link to="/Contacte">Contacte</router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script  lang="ts">
export default {
    name: 'capcalera',
}
</script>
