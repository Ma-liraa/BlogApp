function Table({ children }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-3xl bg-[#3B66FF]/10 p-2 shadow-[0_0_30px_rgba(59,102,255,0.5)] md:mb-0">
      <div className="overflow-x-auto rounded-2xl bg-[#fcfcff]">
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
