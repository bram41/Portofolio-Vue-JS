<template>
  <b-container class="mt-4">
    <b-row>
      <b-col lg="10" offset-lg="1">
        <div id="content">
          <ul class="timeline">
            <li class="event">
              <h3>
                Student Computer Sience, Dian Nuswantoro University Semarang
              </h3>
              <span class="time-date">2018 - 2021</span>
              <p>
                Diploma of Computer Science with GPA of 3,67 and member of the
                Association of Computer Sience Diploma.
              </p>
              <hr class="new2 mt-4" />
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
hr.new2 {
  border-top: 1px dashed rgb(0, 0, 0);
}

.timeline {
  border-left: 3px solid #727cf5;
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
  background: rgba(114, 124, 245, 0.09);
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 30px;
  list-style: none;
  text-align: left;
}

@media (max-width: 767px) {
  .timeline {
    max-width: 98%;
    padding: 25px;
  }
}

.timeline h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
  font-weight: 600;
  font-size: 1rem;
}

.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 767px) {
  .timeline .event {
    padding-top: 30px;
  }
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #727cf5;
  box-shadow: 0 0 0 3px #727cf5;
  left: -35.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

@media (max-width: 767px) {
  .timeline .event:after {
    left: -31.8px;
  }
}

.rtl .timeline {
  border-left: 0;
  text-align: right;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 3px solid #727cf5;
}
</style>
