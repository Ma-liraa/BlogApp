function Table({ children }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-3xl bg-white  p-2 md:mb-0">
      <div className="overflow-x-auto">
        <table>{children}</table>
      </div>
    </div>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead className="border-b border-b-[#C3CDFF]/50">
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
