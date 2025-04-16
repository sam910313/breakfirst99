import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"

  const items = [
     { id: 1, name: "培根", stock: 15, minStock: 10 },
     { id: 2, name: "雞蛋", stock: 8, minStock: 10 },
     { id: 3, name: "吐司", stock: 20, minStock: 15 },
     ];

     
     
export default function InventoryPage(){
    return(
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">庫存管理</h1>
                <Button asChild>
                    <Link href="/items/new">新增商品</Link>
                </Button>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>商品名稱</TableHead>
                            <TableHead>當前庫存</TableHead>
                            <TableHead>最低庫存</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((items) => (
                            <TableRow key={items.id}>
                                <TableCell>{items.name}</TableCell>
                                <TableCell className={items.stock < items.minStock ? "text-red-700" : ''}>
                                        {items.stock}
                                        {items.stock < items.minStock ? ' (庫存不足)' : ''}
                                </TableCell>
                                <TableCell>{items.minStock}</TableCell> 
                                <TableCell>
                                    <Button className ="mr-2 bg-green-700 text-white">編輯</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}