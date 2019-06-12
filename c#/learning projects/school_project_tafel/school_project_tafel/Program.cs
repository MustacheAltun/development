using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learning_project2
{
    class Program
    {
        static void Main(string[] args)
        {
            start:
            int num01;
            int number = 0;
            Console.Write("Type a number to be multiplied: ");
            num01 = Convert.ToInt32(Console.ReadLine());
            while (number < 10)
            {
                number++;
                Console.WriteLine(number + "*" + num01 + " = " + number * num01);
            }
            Console.ReadKey();
            Console.WriteLine();
            goto start;
        }
    }
}
