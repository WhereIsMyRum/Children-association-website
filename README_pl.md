<html>
<body>
<h1 class="title">Children Association website</h1>
<h3 class="why">Powód</h3>
  <p class="why">Niniejsza strona powstała w ramach przedmiotu <i>Hypermedia Applications</i>, jako projekt zaliczeniowy podczas mojej wymiany na Politecnico di Milano, którą odbyłem w pierwszej połowie 2020 roku. W ramach projektyu strona została najpierw zaprojekotwana pod względem UX and UI z wykorzystaniem frameworka stworzonego na Politecnico di Milano, a następnie zaprogramowana i zdeployowana na heroku.</p>
<h3 class="what">Cel</h3>
<p class="what">Strona Children Association to strona fikcyjnej orgzanizacji non-profit, której głównym celem jest pomoc dzieciom pochodzacym z biednych obszarów, jak kraje trzeciego świata, lub z biedniejszych rodzin.</p>
<h3 class="how">Wykonanie</h3>
<p class="how">Najpierw strona została zaprojektowana przy użyciu Adobe XD i wspmnianego wczesniej frameworka to projektowania Ux i UI. Strona została zaprojektowana we współpracy z członkami mojego teamu. Zabronione było używanie jakiegokolwiek frameworku do frontendu ani template systems, dlatego też zdecydowałem się na zaimplementowanie własnego frameworku. We owym framworku każdy komponent, którego treść ładowana jest dynamicznie, został utworzony w osobnych plikach. Każdy z tych komponentów posiada informacje odnosnie kodu html którego używa, oraz w jaki sposób pobrać dane z api i wyrenderować je używając templatki. Sam framework jest dość prosty, ale uważam, że było to interesujące wyzwanie którego, mimo początkowych opóźnień spowodowanych koniecznością zaprojektowania frameworku, finalnie przyczyniło się do przyspieszenia pracy w ogólnym rozrachunku. Strona jest hostowana przy użyciu heroku, a środowisko do developementu wykorzystuje Dockera i Nginx. Backend został stworzony przy użyciu frameworka wykorzystującego dokumentację Swagger do routowania requestów (wymóg prowadzącego). Dane są przechowywane przy użyciu bazy danych PostgreSQL (równiez wymóg prowadzącego), również hostowanej na heroku.</p>
 <h3 class="usage">Jak korzystać</h3>
  <p class="usage">W kwestii używania nie ma zbyt wiele do powiedzenia, dlatego zerknij proszę na stronę o tu: <a href="http://children-association.herokuapp.com/" target="_blank">Children Association website</a> i oceń ją sam!</p>
<h3 class="technologies">Zastosowane technologie</h3>
<ul class="technologies">
  <li class="technologies">Docker</li>
  <li class="technologies">Heroku</li>
  <li class="technologies">HTML</li>
  <li class="technologies">CSS</li>
  <li class="technologies">JS</li>
  <li class="technologies">Nginx</li>
  <li class="technologies">PostgreSQL</li>
  <li class="technologies">Swagger (OpenAPI)</li>
</ul>
<hr>
<small class="created">Data powstania: April 2020</small>
</body>
</html>
