import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {
  product_attributes!: MatTableDataSource<String>;

  hardcoded_input = [
    {"title":"Lenovo ThinkPad T480 14-inch HD Business Laptop (Intel 8th Gen Quad-Core i5-8250U, 16GB DDR4 RAM, Toshiba 256GB PCIe NVMe 2242 M.2 SSD) Fingerprint, Thunderbolt 3 Type-C, WiFi, Windows 10 Pro (Renewed)","price":"$434.99","category":"pc","attributeTable":{"Standing screen display size":"‎14 Inches","Display Resolution":"‎1366x768","Max screen resolution":"‎1366 x 768 Pixels","Processor":"‎1.6 GHz","RAM":"‎16 GB DDR4","Memory Speed":"‎2133 MHz","Hard Drive":"‎256 GB SSD","Graphics coprocessor":"‎Intel","Chipset brand":"‎Intel","Card description":"‎Integrated","Graphics Memory Size":"‎1 GB","Wireless Standard":"‎Bluetooth, 802.11ac","Average Battery Life (in hours)":"‎3 Hours","Brand":"‎Lenovo","Series":"‎ThinkPad T480 Commercial Notebook PC","Item model number":"‎Thinkpad T480","Hardware Platform":"‎PC","Operating System":"‎Windows 10 Pro","Product Dimensions":"‎33.78 x 23.37 x 2.03 cm; 1.36 Kilograms","Item dimensions L x W x H":"‎33.8 x 23.4 x 2 Centimetres","Colour":"‎Black","Processor Brand":"‎Intel","Number of Processors":"‎4","Memory Type":"‎DDR4 SDRAM","Hard Disk Interface":"‎Solid State","Hard drive rotational speed":"‎16 RPM","Power Source":"‎AC &amp; Battery","Batteries":"‎2 Lithium Ion batteries required. (included)"},"ratings":"58","averageRating":"4.3"},
    {"title":"Lenovo Thinkpad T480s Ultrabook Laptop Intel i5-8350U, 8GB RAM, 256GB SSD HDMI, 14-in LCD Win10 Pro (Renewed)","price":"$389.97","category":"pc","attributeTable":{"Standing screen display size":"‎14 Inches","Display Resolution":"‎1920 x 1080 pixels","Max screen resolution":"‎1920 x 1080","Processor":"‎8032","RAM":"‎4 GB SDRAM","Memory Speed":"‎2400 MHz","Hard Drive":"‎256.00 SSD","Graphics coprocessor":"‎Intel HD Graphics","Chipset brand":"‎Intel","Card description":"‎Integrated","Wireless Standard":"‎802.11g","Brand":"‎Lenovo","Series":"‎Lenovo Thinkpad","Hardware Platform":"‎PC","Operating System":"‎Windows 10 Pro","Product Dimensions":"‎46.99 x 30.48 x 8.26 cm; 60 Grams","Item dimensions L x W x H":"‎47 x 30.5 x 8.3 Centimetres","Colour":"‎Black","Processor Brand":"‎Intel","Number of Processors":"‎2","Memory Type":"‎Unknown","Flash memory size":"‎256 GB","Hard Disk Interface":"‎Unknown","Hard drive rotational speed":"‎2 RPM","Voltage":"‎120 Volts","Batteries":"‎1 Lithium Ion batteries required. (included)"},"ratings":"8","averageRating":"4.8"},
    {"title":"Lenovo Thinkpad T480s Ultrabook Laptop Intel i7-8550U, 16GB RAM, 512GB SSD, 14-in FHD IPS, Win10 Pro (Renewed)","price":"$584.99","category":"pc","attributeTable":{"Standing screen display size":"‎14 Inches","Display Resolution":"‎1920 x 1080 pixels","Max screen resolution":"‎1920 x 1080","Processor":"‎1.9 GHz core_i7_family","RAM":"‎16 GB DDR","Hard Drive":"‎512 GB SSD","Graphics coprocessor":"‎Intel UHD Graphics 620","Chipset brand":"‎Intel","Card description":"‎Integrated","Graphics Memory Size":"‎8 MB","Number of USB 2.0 Ports":"‎4","Average Battery Life (in hours)":"‎15.6 Hours","Brand":"‎Lenovo","Series":"‎Lenovo Thinkpad T480s","Manufacturer reference":"‎NA-cr","Hardware Platform":"‎PC","Operating System":"‎Windows 10","Parcel Dimensions":"‎40 x 32.38 x 6.98 cm; 1.3 Kilograms","Processor Brand":"‎Intel","Number of Processors":"‎4","Memory Type":"‎DDR SDRAM","Flash memory size":"‎512 GB","Hard Disk Interface":"‎Solid State","Power Source":"‎Battery Powered","Batteries":"‎1 Lithium Ion batteries required."},"ratings":"7","averageRating":"4.5"}
  ]

  ngOnInit(): void {

  }
}
