import type { NextPage } from "next";
import Head from "next/head";
import { AccountsProvider, useAccounts } from "contexts/accounts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AccountsContent = () => {
  const { accounts, loading } = useAccounts();

  if (loading || !accounts) return <div>loading</div>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>名称</TableCell>
            <TableCell align="right">部署</TableCell>
            <TableCell align="right">市区郡</TableCell>
            <TableCell align="right">住所</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts.map((acc) => (
            <TableRow
              key={acc.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {acc.name}
              </TableCell>
              <TableCell align="right">{acc.site}</TableCell>
              <TableCell align="right">{acc.billingCity}</TableCell>
              <TableCell align="right">{acc.billingStreet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Accounts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PAX | 取引先</title>
      </Head>

      <AccountsProvider>
        <AccountsContent />
      </AccountsProvider>
    </div>
  );
};

export default Accounts;
