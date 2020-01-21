using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class ExtendUserClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Alias",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreation",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateDeNaissance",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DerniereConnexion",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Descrioption",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Interets",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Pays",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Recherche",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ville",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sexe",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    DateAjout = table.Column<DateTime>(nullable: false),
                    IsMain = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Photos_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Photos_UserId",
                table: "Photos",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropColumn(
                name: "Alias",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DateCreation",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DateDeNaissance",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DerniereConnexion",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Descrioption",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Interets",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Pays",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Recherche",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Ville",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "sexe",
                table: "Users");
        }
    }
}
