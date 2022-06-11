export default function Content() {
  return (
    <div className="description">
      <h1>Cool toggle for dark and light themes</h1>
      <p>
        This toggle is created by using React Hooks createContext and useContext
        as well as customed styles. I've used createContext and useContext in
        order to omit potential props drilling between a banch of React
        components in my projects.
      </p>
      <p>
        For styling, I have used a plain CSS with before psedo-element and a
        little bit of shadow as well as animations. When it comes to icons, I
        have used React Icons library for moon and sun icons.
      </p>
    </div>
  );
}
