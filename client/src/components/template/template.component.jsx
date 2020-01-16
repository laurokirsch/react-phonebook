import React from 'react';
// import '../../assets/vendors/js/core'
// import '../../assets/vendors/js/core.js'
// import '../../assets/vendors/apexcharts/apexcharts.min.js'
// import '../../assets/vendors/chartjs/Chart.min.js'
// import '../../assets/js/charts/chartjs.addon.js'
// import '../../assets/js/template.js'
// import '../../assets/js/dashboard.js'

const Template = () => {
  return (
    <>
      <nav className='t-header'>
        <div className='t-header-brand-wrapper'>
          <a href='index.html'>
            <img className='logo' src='../assets/images/logo.svg' alt='' />
            <img
              className='logo-mini'
              src='../assets/images/logo_mini.svg'
              alt=''
            />
          </a>
        </div>
        <div className='t-header-content-wrapper'>
          <div className='t-header-content'>
            <button className='t-header-toggler t-header-mobile-toggler d-block d-lg-none'>
              <i className='mdi mdi-menu'></i>
            </button>
            <form action='#' className='t-header-search-box'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inlineFormInputGroup'
                  placeholder='Buscar contatos'
                  autocomplete='off'
                />
                <button className='btn btn-primary' type='submit'>
                  <i className='mdi mdi-arrow-right-thick'></i>
                </button>
              </div>
            </form>
            <ul className='nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  Logout <i className='mdi mdi-logout-variant mdi-1x'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='page-body'>
        <div className='sidebar'>
          <div className='user-profile'>
            <div className='display-avatar animated-avatar'>
              <img
                className='profile-img img-lg rounded-circle'
                src='../assets/images/profile/male/image_1.png'
                alt='profile image'
              />
            </div>
            <div className='info-wrapper'>
              <p className='user-name'>Lauro Kirsch</p>
            </div>
          </div>
          <ul className='navigation-menu'>
            <li className='nav-category-divider'>MAIN</li>
            <li>
              <a href='index.html'>
                <span className='link-title'>Dashboard</span>
                <i className='mdi mdi-gauge link-icon'></i>
              </a>
            </li>
            <li>
              <a
                href='#sample-pages'
                data-toggle='collapse'
                aria-expanded='false'
              >
                <span className='link-title'>Sample Pages</span>
                <i className='mdi mdi-flask link-icon'></i>
              </a>
              <ul className='collapse navigation-submenu' id='sample-pages'>
                <li>
                  <a href='pages/sample-pages/login_1.html' target='_blank'>
                    Login
                  </a>
                </li>
                <li>
                  <a href='pages/sample-pages/error_2.html' target='_blank'>
                    Error
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href='#ui-elements'
                data-toggle='collapse'
                aria-expanded='false'
              >
                <span className='link-title'>UI Elements</span>
                <i className='mdi mdi-bullseye link-icon'></i>
              </a>
              <ul className='collapse navigation-submenu' id='ui-elements'>
                <li>
                  <a href='pages/ui-components/buttons.html'>Buttons</a>
                </li>
                <li>
                  <a href='pages/ui-components/tables.html'>Tables</a>
                </li>
                <li>
                  <a href='pages/ui-components/typography.html'>Typography</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='pages/forms/form-elements.html'>
                <span className='link-title'>Forms</span>
                <i className='mdi mdi-clipboard-outline link-icon'></i>
              </a>
            </li>
            <li>
              <a href='pages/charts/chartjs.html'>
                <span className='link-title'>Charts</span>
                <i className='mdi mdi-chart-donut link-icon'></i>
              </a>
            </li>
            <li>
              <a href='pages/icons/material-icons.html'>
                <span className='link-title'>Icons</span>
                <i className='mdi mdi-flower-tulip-outline link-icon'></i>
              </a>
            </li>
            <li className='nav-category-divider'>DOCS</li>
            <li>
              <a href='../docs/docs.html'>
                <span className='link-title'>Documentation</span>
                <i className='mdi mdi-asterisk link-icon'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='page-content-wrapper'>
          <div className='page-content-wrapper-inner'>
            {/* <div className="content-viewport">
          <div className="row">
            <div className="col-12 py-5">
              <h4>Dashboard</h4>
              <p className="text-gray">Olá, Lauro Kirsch</p>
            </div>
          </div>
        </div> */}
            <div className='col-lg-4 col-md-6 equel-grid'>
              <div className='grid'></div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 equel-grid'>
              <div className='grid'>
                <div className='grid-body'>
                  <div className='split-header'>
                    <p className='card-title'>Available Balance</p>
                    <span
                      className='btn action-btn btn-xs component-flat'
                      data-toggle='tooltip'
                      data-placement='left'
                      title='Available balance since the last week'
                    >
                      <i className='mdi mdi-information-outline text-muted mdi-2x'></i>
                    </span>
                  </div>
                  <div className='d-flex align-items-end mt-2'>
                    <h3>26.00453100</h3>
                    <p className='ml-1 font-weight-bold'>BTC</p>
                  </div>
                  <div className='d-flex flex-row mt-4 mb-4'>
                    <div className='grid'>
                      <div className='badge badge-success'>Pessoal</div>
                      <div className='badge badge-info'>Profissional</div>
                      <button
                        className='btn btn-outline-light text-gray component-flat w-50 mr-2'
                        type='button'
                      >
                        LIMPAR
                      </button>
                      <button
                        className='btn btn-primary w-50 ml-2'
                        type='button'
                      >
                        ATUALIZAR
                      </button>
                      <button
                        className='btn btn-primary w-50 ml-2'
                        type='button'
                      >
                        CADASTRAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 equel-grid'>
              <div className='grid widget-revenue-card'>
                <div className='grid-body d-flex flex-column h-100'>
                  <div className='mt-auto'>
                    <h3 className='font-weight-medium mt-4'>70%</h3>
                    <p className='text-gray'>Sua agenda está ficando cheia</p>
                    <div className='w-50'>
                      <div className='d-flex justify-content-between text-muted mt-3'>
                        <small>Contatos salvos</small> <small>7 / 10</small>
                      </div>
                      <div className='progress progress-slim mt-2'>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '68%' }}
                          aria-valuenow='68'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8 equel-grid'>
              <div className='grid'>
                <div className='grid-body py-3'>
                  <p className='card-title ml-n1'>Order History</p>
                </div>
                <div className='table-responsive'>
                  <table className='table table-hover table-sm'>
                    <thead>
                      <tr className='solid-header'>
                        <th colspan='2' className='pl-4'>
                          Nome
                        </th>
                        <th>Telefone</th>
                        <th>Tipo de contato</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='pr-0 pl-4'>
                          <img
                            className='profile-img img-sm'
                            src='../assets/images/profile/male/image_4.png'
                            alt='profile image'
                          />
                        </td>
                        <td className='pl-md-0'>
                          <small className='text-black font-weight-medium d-block'>
                            Barbara Curtis
                          </small>
                          <span className='text-gray'>
                            <span className='status-indicator rounded-indicator small bg-primary'></span>
                            Account Deactivated{' '}
                          </span>
                        </td>
                        <td>
                          <small>8523537435</small>
                        </td>
                        <td> Just Now </td>
                      </tr>
                      <tr>
                        <td className='pr-0 pl-4'>
                          <img
                            className='profile-img img-sm'
                            src='../assets/images/profile/male/image_3.png'
                            alt='profile image'
                          />
                        </td>
                        <td className='pl-md-0'>
                          <small className='text-black font-weight-medium d-block'>
                            Charlie Hawkins
                          </small>
                          <span className='text-gray'>
                            <span className='status-indicator rounded-indicator small bg-success'></span>
                            Email Verified{' '}
                          </span>
                        </td>
                        <td>
                          <small>9537537436</small>
                        </td>
                        <td> Mar 04, 2018 11:37am </td>
                      </tr>
                      <tr>
                        <td className='pr-0 pl-4'>
                          <img
                            className='profile-img img-sm'
                            src='../assets/images/profile/female/image_2.png'
                            alt='profile image'
                          />
                        </td>
                        <td className='pl-md-0'>
                          <small className='text-black font-weight-medium d-block'>
                            Nina Bates
                          </small>
                          <span className='text-gray'>
                            <span className='status-indicator rounded-indicator small bg-warning'></span>
                            Payment On Hold{' '}
                          </span>
                        </td>
                        <td>
                          <small>7533567437</small>
                        </td>
                        <td> Mar 13, 2018 9:41am </td>
                      </tr>
                      <tr>
                        <td className='pr-0 pl-4'>
                          <img
                            className='profile-img img-sm'
                            src='../assets/images/profile/male/image_10.png'
                            alt='profile image'
                          />
                        </td>
                        <td className='pl-md-0'>
                          <small className='text-black font-weight-medium d-block'>
                            Hester Richards
                          </small>
                          <span className='text-gray'>
                            <span className='status-indicator rounded-indicator small bg-success'></span>
                            Email Verified{' '}
                          </span>
                        </td>
                        <td>
                          <small>5673467743</small>
                        </td>
                        <td> Feb 21, 2018 8:34am </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className='border-top px-3 py-2 d-block text-gray' href='#'>
                  <small className='font-weight-medium'>
                    <i className='mdi mdi-chevron-down mr-2'></i>View All Order
                    History
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
