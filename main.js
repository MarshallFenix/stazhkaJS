*, *::before, *::after {
  margin: 0;
  box-sizing: inherit;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  /* outline: 1px solid red; */
}

html {
  box-sizing: border-box;
  width: 100%;
}


.header {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  padding: 2rem 1.5rem;
  background-color: aliceblue;
  z-index: 1000;
}
.header__links {
  display: flex;
  gap: 3rem;
}
.header__logo {
  &:hover { cursor: pointer; }
}
.links__auth {
  display: flex;
  align-items: center;
  gap: .6rem;
  font-size: 1.2rem;
  &:hover { cursor: pointer; }
}
.links__img {
  width: 2rem;
}


.banner {
  position: relative;
  background-image: url('assets/pics/main/banner.jpg');
  background-size: cover;
  background-position: center top 20%;
  background-repeat: no-repeat;
  height: 60vh;
}
.banner__text {
  position: absolute;
  top: 20%;
  left: 10%;
}
.banner__headding {
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.banner__button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f1f0f0;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    color: #ffffff;
    background-color: #3e3e3e;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
}

.courses__h1 {
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
}
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.4rem;
  padding: 2rem 10%;
}
.course {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
}
.course__img {
  width: 100%;
  padding-bottom: .8rem;
}
.course__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
}
.course__description {
  padding-bottom: .4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
  padding: 2rem 1.5rem;
  color: #dedcdc;
  background-color: #333;
}

.links {
  display: flex;
  gap: 3rem;
}
.links__section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:hover { cursor: pointer; }
}
.section__title {
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  &:hover { cursor: text; }
}

.socials > * {
  padding: .4rem;
  &:hover {
    cursor: pointer;
  }
}
